from django.contrib import admin
from django.urls import path, include
from teas import views

from teas.views import (
    api_detail_wish_view,
    api_update_wish_view,
    # api_delete_wish_view,
    api_create_wish_view
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('teas.urls')),
    path('', include('accounts.urls')), 
    path('<slug>/', api_detail_wish_view, name="detail"),
    path('<slug>/update', api_update_wish_view, name="update"),
    path('api/wishlist/<str:pk>/', views.wishDelete, name="delete"),
    path('create/', api_create_wish_view, name="create"),
]
