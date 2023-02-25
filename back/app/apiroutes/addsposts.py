from app.misc import *


@app.route("/get_all_addsposts", methods=["GET"])
def get_all():
    data = request.json
    addsposts = db.getAllAddsposts()
    response = {"addsposts": []}
    for addspost in addsposts:
        response["addsposts"].append({
            "id": addspost.id,
            "caption": addspost.caption,
            "text": addspost.text,
            "sender": addspost.sender
        })
    return jsonify(response), 200
