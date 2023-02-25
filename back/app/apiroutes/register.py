from app.misc import *


@app.route("/register", methods=["POST"])
def register():
    data = request.json
    try:
        print(db.getUserByUsername(data["username"]))
        return jsonify({
            "message": "user is already registered"
        }), 401
    except dataexceptions.RecordIsMissing:
        user = models.User(id=None, **data)
        db.addUser(user)
        return jsonify({
            "message": "user is successfuly registered"
        }), 201
