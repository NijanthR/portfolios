import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from api.models import Skill

skills_data = [
    {'name': 'C', 'category': 'BACKEND', 'level': 80},
    {'name': 'Python', 'category': 'BACKEND', 'level': 90},
    {'name': 'Java', 'category': 'BACKEND', 'level': 75},
    {'name': 'Django', 'category': 'BACKEND', 'level': 85},
    {'name': 'HTML', 'category': 'FRONTEND', 'level': 95},
    {'name': 'CSS', 'category': 'FRONTEND', 'level': 90},
    {'name': 'React', 'category': 'FRONTEND', 'level': 80},
    {'name': 'Machine Learning', 'category': 'AIML', 'level': 85},
    {'name': 'Deep Learning', 'category': 'AIML', 'level': 80},
    {'name': 'Prompt Engineering', 'category': 'AIML', 'level': 90},
    {'name': 'TensorFlow', 'category': 'AIML', 'level': 75},
    {'name': 'PyTorch', 'category': 'AIML', 'level': 70},
]

for skill_data in skills_data:
    Skill.objects.get_or_create(name=skill_data['name'], defaults=skill_data)
    print(f"Ensured skill: {skill_data['name']}")
