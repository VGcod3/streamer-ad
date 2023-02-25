from app.misc import *


@app.route("/login", methods=["GET"])
def login():
    data = request.json
    try:
        advertiser = db.getAdvertiserByUsername(data["username"])
        if advertiser.password == data["password"]:
            return jsonify({
                "message": "logged in",
                "user": {
                    "id": advertiser.id,
                    "type": "advertiser",
                    "username": advertiser.username,
                    "links": advertiser.links
                }
            })
        else:
            return jsonify({
                "message": "wrong password"
            }), 400
    except dataexceptions.RecordIsMissing:
        try:
            streamer = db.getStreamerByUsername(data["username"])
            if streamer.password == data["password"]:
                return jsonify({
                    "message": "logged in",
                    "user": {
                        "username": streamer.username,
                        "links": streamer.links,
                        "about":streamer.about,
                        "prices": {
                            "banner": streamer.bannerPrice,
                            "video": streamer.videoPrice,
                            "native": streamer.nativePrice
                        }
                    }
                })
            else:
                return jsonify({
                    "message": "wrong password"
                }), 400
        except dataexceptions.RecordIsMissing:
            return jsonify({
                "message": "user is not registered"
            }), 400