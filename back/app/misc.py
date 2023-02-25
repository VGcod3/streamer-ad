from flask import Flask, request, jsonify
from os import path

from data.database import Database
from data import models
from data import exceptions as dataexceptions

db = Database("dbfiles")

DIR = path.split(__file__)[0]
app = Flask(__name__)