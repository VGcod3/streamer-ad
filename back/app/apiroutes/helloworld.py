from app.misc import *


@app.route("/")
@app.route("/index")
def hello_world():
    return "Hello, world!"

