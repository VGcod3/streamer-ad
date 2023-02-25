from app.misc import *


@app.route("/register", methods=["POST"])
def register():
    data = request.json
    if data["type"] == "advertiser":
        try:
            db.addAdvertiser(models.Advertiser(
                id=None,
                username=data["username"],
                password=data["password"],
                links=data["links"]
            ))
            return jsonify({
                "message": "successfuly registered"
            }), 200
        except dataexceptions.RecordAlreadyExists:
            return jsonify({
                "message": "user is already registered"
            }), 400
    elif data["type"] == "streamer":
        try:
            db.addStreamer(models.Streamer(
                id=None,
                username=data["username"],
                password=data["password"],
                links=data["links"],
                about=data["about"],
                videoPrice=data["prices"]["video"],
                nativePrice=data["prices"]["native"],
                bannerPrice=data["prices"]["banner"]
            ))
            return jsonify({
                "message": "successfuly registered"
            }), 200
        except dataexceptions.RecordAlreadyExists:
            return jsonify({
                "message": "user is already registered"
            }), 400
    else:
        return jsonify({
                "message": "invalid user type"
            }), 400
