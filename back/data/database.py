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

    # def getUser(self, id: int):
    #     self.cursor.execute(f"SELECT * FROM users WHERE id={id}")
    #     record = self.cursor.fetchone()
    #     if record is None:
    #         raise RecordIsMissing(id)
    #     return User(*record)
    #
    # def getUserByUsername(self, username: str):
    #     self.cursor.execute(f"SELECT * FROM users WHERE username='{username}'")
    #     record = self.cursor.fetchone()
    #     if record is None:
    #         raise RecordIsMissing(username)
    #     return User(*record)
    #
    # def addUser(self, user: User):
    #     self.cursor.execute(
    #         f"INSERT INTO users (type, username, password, email)\
    #         VALUES (?, ?, ?, ?)",
    #         (user.type, user.username, user.password, user.email)
    #     )
    #     self.db.commit()
    #
    # def addPost(self, post: Post):
    #     self.cursor.execute(
    #         f"INSERT INTO posts (sender, caption, text, tags, start, finish)\
    #         VALUES (?,?,?,?,?)",
    #         (post.sender, post.caption, post.text, post.tags, post.start, post.finish)
    #     )
    #     self.db.commit()
    #
    # def getPostsByUser(self, id: int):
    #     self.cursor.execute(f"SELECT * FROM posts WHERE sender= '{id}'")
    #     records = self.cursor.fetchall()
    #     posts = []
    #
    #     for record in records:
    #         posts.append(Post(*record))
    #
    #     return posts
    #
    # def getAllPosts(self):
    #     self.cursor.execute(f"SELECT * FROM posts")
    #     records = self.cursor.fetchall()
    #     posts = []
    #
    #     for record in records:
    #         posts.append(Post(*record))
    #
    #     return posts

    def addAdvertiser(self, advertiser: Advertiser):
        self.cursor.execute(f"SELECT * FROM advertisers WHERE username='{advertiser.username}'")
        records = self.cursor.fetchall()
        # if records is not []:
        #     raise RecordAlreadyExists(advertiser.username)
        self.cursor.execute(f"INSERT INTO advertisers (username, password, links) VALUES (?, ?, ?)", (advertiser.username, advertiser.password, advertiser.links))
        self.db.commit()

    def addStreamer(self, streamer: Streamer):
        self.cursor.execute(f"SELECT * FROM streamers WHERE username='{streamer.username}'")
        records = self.cursor.fetchall()
        # if records is not []:
        #     raise RecordAlreadyExists(advertiser.username)
        self.cursor.execute(
            f"INSERT INTO streamers (username, password, links, about, videoPrice, nativePrice, bannerPrice) VALUES (?, ?, ?, ?, ?, ?, ?)",
            (streamer.username, streamer.password, streamer.links, streamer.about, streamer.videoPrice, streamer.nativePrice, streamer.bannerPrice))
        self.db.commit()

    def getStreamerByUsername(self, username: str):
        self.cursor.execute(f"SELECT * FROM streamers WHERE username='{username}'")
        record = self.cursor.fetchone()
        if record is None:
            raise RecordIsMissing(username)
        return Streamer(*record)

    def getAllAdvertisers(self):
        self.cursor.execute(f"SELECT * FROM advertisers")
        records = self.cursor.fetchall()
        adProfiles = []

        for record in records:
            adProfiles.append(Advertiser(*record))

        return adProfiles

    def getAdvertiserByUsername(self, username: str):
        self.cursor.execute(f"SELECT * FROM advertisers WHERE username='{username}'")
        record = self.cursor.fetchone()
        if record is None:
            raise RecordIsMissing(username)
        return Advertiser(*record)

    def isConnected(self, streamerId: int, advertiserId: int):
        self.cursor.execute(f"SELECT * FROM completedOffers WHERE streamerId = {streamerId} AND advertiserId = {advertiserId}")
        if self.cursor.fetchone():
            return True
        else:
            return False

    def addFeedback(self, feedback: Feedback):
        self.cursor.execute(
            f"INSERT INTO 'feedback' (streamerId, advertiserId, rate, text) VALUES (?, ?, ?, ?)",
            (feedback.streamerId, feedback.advertiserId, feedback.rate, feedback.text))
        self.db.commit()

    def getFeedbacks(self, streamerId: int):
        self.cursor.execute(f"SELECT * FROM feedback WHERE streamerId = {streamerId}")

        records = self.cursor.fetchall()
        streamerFeedbacks = []

        for record in records:
            streamerFeedbacks.append(Feedback(*record))

        return streamerFeedbacks

    def getAllAddsposts(self):
        self.cursor.execute(f"SELECT * FROM postAdds")

        records = self.cursor.fetchall()
        addsPosts = []

        for record in records:
            addsPosts.append(Addspost(*record))

        return addsPosts

    def getAllStreamposts(self):
        self.cursor.execute(f"SELECT * FROM postStream")

        records = self.cursor.fetchall()
        streamPosts = []

        for record in records:
            streamPosts.append(Streampost(*record))

        return streamPosts

    def createConnection(self, streamerId : int, advertiserId: int):
        self.cursor.execute(
                 f"INSERT INTO completedOffers (streamerId, advertiserId)\
                 VALUES (?, ?)",
                 (streamerId, advertiserId)
             )
        self.db.commit()

    def getAllStreamers(self):
        self.cursor.execute(f"SELECT * FROM streamers")
        records = self.cursor.fetchall()
        streamers = []
        for record in records:
            streamers.append(Streamer(*record))
        return streamers

    def getStreamer(self, id):
        self.cursor.execute(f"SELECT * FROM streamers WHERE id={id}")
        record = self.cursor.fetchone()
        if record is None:
            raise RecordIsMissing(id)
        return Streamer(*record)


