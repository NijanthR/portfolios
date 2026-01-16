from django.contrib import admin
from .models import Project
from .models import Skill
from .models import Experience
from .models import ContactMessage

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', 'description')
    list_filter = ('created_at',)
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)




class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'level')
    list_filter = ('category',)
    search_fields = ('name',)


class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'company', 'start_date', 'end_date', 'is_current')
    list_filter = ('is_current',)
    search_fields = ('role', 'company')


class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('created_at',)

admin.site.register(Project, ProjectAdmin)
admin.site.register(Skill, SkillAdmin)
admin.site.register(Experience, ExperienceAdmin)
admin.site.register(ContactMessage, ContactMessageAdmin)
