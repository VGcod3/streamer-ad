from dataclasses import dataclass


@dataclass
class User:
    id: int
    type: str
    username: str
    password: str
    email: str
