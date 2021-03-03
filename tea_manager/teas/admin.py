from django.contrib import admin

from .models import Tea

class TeaAdmin(admin.ModelAdmin):
  list_display = ['__str__', 'user']
  search_fields = ['user__username', 'user__email']
  class Meta:
    model = Tea

admin.site.register(Tea, TeaAdmin)
