from app.misc import *


@app.route("/get_all_streamers", methods=["GET"])
def get_all_streamers():
    streamers = db.getAllStreamers()

    response = {
        "streamers": []
    }
    for streamer in streamers:
        response["streamers"].append({
            "id": streamer.id,
            "username": streamer.username,
            # "password": streamer.password,
            "links": streamer.links,
            "prices": {
                "banner": streamer.bannerPrice,
                "video": streamer.videoPrice,
                "native": streamer.nativePrice
            }
        })
    # Add the Access-Control-Allow-Origin header to allow cross-origin requests
    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    return jsonify(response), 200


@app.route("/get_streamer_by_id", methods=["GET"])
def get_streamer_by_id():
    data = request.json
    streamer_id = data["id"]
    try:
        streamer = db.getStreamer(streamer_id)
    except dataexceptions.RecordIsMissing:
        return jsonify({
            "message": "user not found"
        }), 400
    return jsonify({
        "id": streamer.id,
        "username": streamer.username,
        "password": streamer.password,
        "links": streamer.links.split(" "),
        "prices": {
            "banner": streamer.bannerPrice,
            "video": streamer.videoPrice,
            "native": streamer.nativePrice
        }
    }), 200
