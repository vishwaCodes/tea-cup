from django.contrib import admin

from .models import Tea, Wishlist

# class TeaAdmin(admin.ModelAdmin):
#   list_display = ['__str__', 'user']
#   search_fields = ['user__username', 'user__email']
#   class Meta:
#     model = Tea

# class WishlistAdmin(admin.ModelAdmin):


admin.site.register(Tea)
admin.site.register(Wishlist)
