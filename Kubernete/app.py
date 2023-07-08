import flask
from flask import Flask, render_templates


app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/')
def index():
    return render_templates('index.html')

if __name__ == "__main__":
 app.run(host="0.0.0.0", debug=True,port="5000")