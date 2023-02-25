class RecordIsMissing(Exception):
    def __init__(self, field):
        super().__init__(f"Record with field value {field} is missing")


class RecordAlreadyExists(Exception):
    def __init__(self, record):
        super().__init__(f"Record {record} already exists")
