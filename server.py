import os
from flask import Flask, render_template, jsonify, request, session, make_response, send_from_directory
from flask_cors import CORS, cross_origin
from flask_restful import Api, Resource, reqparse

template_dir = os.path.abspath('./build')
static_dir = os.path.abspath('./build/static')

app = Flask(__name__, static_folder=static_dir, template_folder=template_dir)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
# app.debug = True
app.config['SECRET_KEY'] = 'super-secret'
app.config.from_object(__name__)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')


# test
if __name__ == "__main__":
    app.run(port=5000, host='0.0.0.0')
