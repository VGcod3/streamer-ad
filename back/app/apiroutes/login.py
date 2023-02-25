from app.misc import *


@app.route("/login", methods=["GET"])
def login():
    data = request.json
    username = data["username"]
    password = data["password"]
    try:
        user = db.getUserByUsername(username)
    except dataexceptions.RecordIsMissing:
        return jsonify({
            "message": "username not found",
            "user": None
        }), 401
    if user.password != password:
        return jsonify({
            "message": "wrong password",
            "user": None
        }), 401
    return jsonify({
        "message": "logged in",
        "user": {
            "id": user.id,
            "type": user.type,
            "username": user.username,
            "email": user.email
        }
    }), 201
