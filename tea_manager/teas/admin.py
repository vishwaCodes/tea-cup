from django.contrib import admin

from .models import Tea, Wishlist


class TeaAdmin(admin.ModelAdmin):
  list_display = ('name', 'description', 'image', 'user',)

class WishlistAdmin(admin.ModelAdmin):
  list_display = ('name',)


admin.site.register(Tea)
admin.site.register(Wishlist)
