from app.misc import *


@app.route("/connect", methods=["POST"])
def connect():
    data = request.json
    streamer_id = data["streamer_id"]
    advertiser_id = data["advertiser_id"]
    db.createConnection(streamer_id, advertiser_id)
    return jsonify({
        "message": "connection successfuly created"
    }), 200


@app.route("/is_connected", methods=["GET"])
def is_connected():
    data = request.json
    return jsonify({
        "connection": db.isConnected(data["streamer_id"], data["advertiser_id"])
    })


@app.route("/add_feedback", methods=["POST"])
def add_feedback():
    data = request.json
    db.addFeedback(models.Feedback(
        None,
        data["streamer_id"],
        data["advertiser_id"],
        data["rate"],
        data["text"]
    ))
    return jsonify({
        "message": "feedback successfuly added"
    })


@app.route("/get_feedbacks", methods=["GET"])
def get_feedbacks():
    data = request.json
    streamer_id = data["streamer_id"]
    feedbacks = db.getFeedbacks(streamer_id)
    response = {"feedbacks": []}
    for feedback in feedbacks:
        response["feedbacks"].append({
            "id": feedback.id,
            "streamer_id": feedback.streamerId,
            "advertiser_id": feedback.advertiserId,
            "rate": feedback.rate,
            "text": feedback.rate
        })
    return jsonify(response), 200


