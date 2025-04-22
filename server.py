from flask import Flask, jsonify
import json

web_app = Flask(__name__)

@web_app.route("/")
def serve_data():
    with open("scraped_data.json") as file:
        data = json.load(file)
    return jsonify(data)

if __name__ == "__main__":
    web_app.run(host="0.0.0.0", port=5000)
