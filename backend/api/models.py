from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.URLField(blank=True, null=True) # Using URL for simplicity, or we can setup media serving
    technologies = models.CharField(max_length=200) # Comma separated list
    link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('FRONTEND', 'Frontend'),
        ('BACKEND', 'Backend'),
        ('AIML', 'AI/ML'),
        ('TOOLS', 'Tools/Others'),
    ]
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='TOOLS')
    level = models.IntegerField(help_text="Skill level percentage (0-100)") 

    def __str__(self):
        return f"{self.name} ({self.get_category_display()})"

class Experience(models.Model):
    company = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField()

    def __str__(self):
        return f"{self.role} at {self.company}"

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"
