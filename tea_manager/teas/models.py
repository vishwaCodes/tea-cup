from django.db import models
from django.contrib.auth.models import User

class Tea(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
  name = models.CharField(max_length=100)
  description = models.TextField(max_length=250, blank=True, null=True)
  image = models.FileField(upload_to='images/', blank=True, null=True)

  def __str__(self):
    return self.name 


class Wishlist(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
  name = models.CharField(max_length=100, blank=True, null=True)

  def __str__(self):
    return self.name
