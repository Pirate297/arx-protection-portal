import sys
sys.path.insert(0, '.')
from app import load_users, get_user_by_username

users = load_users()
print(f"Loaded {len(users)} users")
print(f"Type: {type(users)}")
if users:
    print(f"First user type: {type(users[0])}")
    print(f"First user: {users[0]}")

user = get_user_by_username('alexander.tsu')
print(f"\nFound user: {user}")
