from requests import get, post

# result = get(
#     "http://127.0.0.1:5000/login",
#     json={"username": "Chugasiter", "password": "123456789"})
# print(result.json())

# result = post(
#     "http://127.0.0.1:5000/register",
#     json={
#         "type": "advertiser",
#         "username": "Chigasiter",
#         "password": "123456789",
#         "email": "vipdan055@gmail.com",
#         "links": "youtube.com"
#     }
# )
# print(result.json())

# result = post(
#     "http://127.0.0.1:5000/register",
#     json={
#         "type": "streamer",
#         "username": "marker",
#         "password": "111",
#         "links": "youtube.com",
#         "about": "about games",
#         "prices": {
#             "video": 100,
#             "banner": 500,
#             "native": 1000
#         }
#     })
# print(result.json())

# result = get(
#     "http://127.0.0.1:5000/login",
#     json={
#         "username": "fucker",
#         "password": "2345"
#     })
# print(result.json())

# result = post(
#     "http://127.0.0.1:5000/connect",
#     json={
#         "streamer_id": 123,
#         "advertiser_id": 321
#     })
# print(result.json())

# result = get(
#     "http://127.0.0.1:5000/is_connected",
#     json={
#         "streamer_id": 123,
#         "advertiser_id": 321
#     })
# print(result.json())

# result = get(
#     "http://127.0.0.1:5000/get_feedbacks",
#     json={
#         "streamer_id": 123
#     }
# )
# print(result.json())

# result = post(
#     "http://127.0.0.1:5000/add_feedback",
#     json={
#         "streamer_id": 123,
#         "advertiser_id": 321,
#         "rate": 3,
#         "text": "textfuck"
#     }
# )
# print(result.json())
#
# result = get(
#     "http://127.0.0.1:5000/get_streamer_by_id",
#     json={
#         "id": 6
#     }
# )
# print(result.json())


result = get(
    "http://127.0.0.1:5000/get_all_streamposts"
)
print(result.json())
