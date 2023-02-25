from dataclasses import dataclass
@dataclass
class Streamer:
    id: int
    username: str
    password: str
    email: str
    links: str
    adout: str
    videoPrice: int
    nativePrice: int
    bannerPrice: int

@dataclass
class Advertiser:
    id: int
    username: str
    password: str

@dataclass
class PostAdds:
    id: int
    sender: str
    caption: str
    category: str

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


