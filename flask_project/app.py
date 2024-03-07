import flask
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
  return render_template("base.html")

@app.route("/coding")
def coding_info():
  return render_template("coding.html")

@app.route("/foodie")
def foodie_info():
  return render_template("foodie.html")

@app.route("/streaming")
def streaming_info():
  return render_template("streaming.html")

if __name__ == "__main__":
  app.run(debug=True)
