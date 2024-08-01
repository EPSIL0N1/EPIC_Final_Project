from flask import Flask, render_template, request, session, redirect, url_for, abort
from flask_socketio import join_room, leave_room, send, SocketIO

app = Flask(__name__)
app.config["SECRET_KEY"] = "27Anrwquu82"
socketio = SocketIO(app)

rooms = {
    "DocConnect": {
        "messages": [
            {"username": "Serena", "msg": "I am having my fifth day of high today"},
            {"username": "Dr. Meenakshi", "msg": "It is very normal! drink water and get some sleep and you are good to go."},
            {"username": "Karla", "msg": "Should I take some medvits?"}
        ]
    },
    "TalkingTales": {
        "messages": [
            {"username": "Prapti", "msg": "This cycle has been way too irregular for me"},
            {"username": "Ayushi", "msg": "And the pain is too much ya?"}
        ]
    },
    "MenstroUpdate": {
        "messages": [
            {"username": "MenstroGuru", "msg": "Welcome to your daily menstrual cycle update. Find latest healthcare supplements at your doorstep!"}
        ]
    },
    "GurlTime": {
        "messages": [
            {"username": "Prapti", "msg": "Hey how did your check up go?"},
            {"username": "Karla", "msg": "Nice and peachy bae!"},
            {"username": "Prapti", "msg": "Way to go!"}
        ]
    }
}

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/join_room", methods=["POST"])
def join_room_route():
    username = request.form.get("username")
    room_name = request.form.get("room")

    if room_name not in rooms:
        return render_template("home.html", error="Invalid room name.")

    session["username"] = username
    session["room"] = room_name
    return redirect(url_for("room", room_name=room_name))

@app.route("/room/<room_name>")
def room(room_name):
    if "username" not in session or "room" not in session or session["room"] != room_name:
        return redirect(url_for("home"))

    if room_name not in rooms:
        abort(404)

    username = session["username"]
    messages = rooms[room_name]["messages"]
    return render_template("room.html", username=username, room=room_name, messages=messages)

@socketio.on("join")
def handle_join(data):
    room = data["room"]
    username = data["username"]
    join_room(room)
    send({"username": username, "msg": f"has joined the room."}, room=room)
    socketio.emit("user_joined", {"username": username}, room=room)

@socketio.on("leave")
def handle_leave(data):
    room = data["room"]
    username = data["username"]
    leave_room(room)
    send({"username": username, "msg": f"{username} has left the room."}, room=room)

@socketio.on("message")
def handle_message(data):
    room = data["room"]
    username = data["username"]
    msg = data["msg"]
    send({"username": username, "msg": msg}, room=room)
    rooms[room]["messages"].append({"username": username, "msg": msg})  # Save the message to the room

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == "__main__":
    socketio.run(app, host='0.0.0.0', port=80 , debug=True)