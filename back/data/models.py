from dataclasses import dataclass
from datetime import datetime


@dataclass
class Streamer:
    id: int
    username: str
    password: str
    links: str
    about: str
    videoPrice: int
    nativePrice: int
    bannerPrice: int


@dataclass
class Advertiser:
    id: int
    username: str
    password: str
    links: str


@dataclass
class Addspost:
    id: int
    sender: str
    caption: str
    category: str
    text: str


class Streampost:
    dt_format = "%H:%M %d.%m.%Y"

    def __init__(self, id: int, sender: str, caption: str, category: str, start: str, finish: str):
        self.id = id
        self.sender = sender
        self.caption = caption
        self.category = category
        self.start = datetime.strptime(start, self.dt_format)
        self.finish = datetime.strptime(finish, self.dt_format)

    def getFinishStr(self):
        return datetime.strftime(self.finish, self.dt_format)

    def getStartStr(self):
        return datetime.strftime(self.start, self.dt_format)

@dataclass
class CompletedOffer:
    streamerId: int
    advertiserId: int


@dataclass
class Feedback:
    id: int
    streamerId: int
    advertiserId: int
    rate: int
    text: str


