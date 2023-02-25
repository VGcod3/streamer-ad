from app.misc import *
from datetime import datetime


@app.route("/get_all_streamposts", methods=["GET"])
def get_all_streamposts():
    streamposts = db.getAllStreamposts()
    response = {"streamposts": []}
    for streampost in streamposts:
        response["streamposts"].append(
            {
                "id": streampost.id,
                "sender": streampost.sender,
                "caption": streampost.caption,
                "category": streampost.category,
                "start": streampost.getStartStr(),
                "finish": streampost.getFinishStr()
            }
        )
    return jsonify(response), 200


@app.route("/get_streamposts_filter", methods=["GET"])
def get_streamposts_filter():
    data = request.json
    if data["time_range"] is not None:
        time_range = []
        time_range[0] = datetime.strptime(data["time_range"][0], models.Streampost.dt_format)
        time_range[1] = datetime.strptime(data["time_range"][1], models.Streampost.dt_format)
    price_range = data["price_range"]
    category = data["category"]

    all_streamposts = db.getAllStreamposts()
    streamposts = []
    for streampost in streamposts:
        streamer = db.getStreamer(streampost.sender)
        if ((streampost.start < time_range[0] and streampost.finish < time_range[1]) or time_range is None) and \
                ((category is not None and price_range[0] < streamer.price_list[category] and price_range[1] > streamer.price_list[category] and price_range is not None) or (category is None and price_range is None)):
            streamposts.append(streampost)
    response = {"streamposts": []}
    for streampost in streamposts:
        response["streamposts"].append(
            {
                "id": streampost.id,
                "sender": streampost.sender,
                "caption": streampost.caption,
                "category": streampost.category
            }
        )
    return jsonify(response), 200

