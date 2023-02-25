from sqlite3 import connect
from os import path

from . import DIR
from .models import *
from .exceptions import *


class Database:

    def __init__(self, source: str):
        self.source = source
        self.db = connect(path.join(DIR, source, "base.db"), check_same_thread=False)
        self.cursor = self.db.cursor()

    def getUser(self, id: int):
        self.cursor.execute(f"SELECT * FROM users WHERE id={id}")
        record = self.cursor.fetchone()
        if record is None:
            raise RecordIsMissing(id)
        return User(*record)

    def getUserByUsername(self, username: str):
        self.cursor.execute(f"SELECT * FROM users WHERE username='{username}'")
        record = self.cursor.fetchone()
        if record is None:
            raise RecordIsMissing(username)
        return User(*record)

    def addUser(self, user: User):
        self.cursor.execute(
            f"INSERT INTO users (type, username, password, email)\
            VALUES (?, ?, ?, ?)",
            (user.type, user.username, user.password, user.email)
        )
        self.db.commit()

    def addPost(self, post: Post):
        self.cursor.execute(
            f"INSERT INTO posts (sender, caption, text, tags, start, finish)\
            VALUES (?,?,?,?,?)",
            (post.sender, post.caption, post.text, post.tags, post.start, post.finish)
        )
        self.db.commit()

    def getPostsByUser(self, id: int):
        self.cursor.execute(f"SELECT * FROM posts WHERE sender= '{id}'")
        records = self.cursor.fetchall()
        posts = []

        for record in records:
            posts.append(Post(*record))

        return posts

    def getAllPosts(self):
        self.cursor.execute(f"SELECT * FROM posts")
        records = self.cursor.fetchall()
        posts = []

        for record in records:
            posts.append(Post(*record))

        return posts

    def addPostByStreamer(self):
