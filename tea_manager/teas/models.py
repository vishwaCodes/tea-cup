from django.db import models
from django.contrib.auth.models import User

class Tea(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  name = models.CharField(max_length=100)
  description = models.TextField(max_length=250)
  image = models.FileField(upload_to='images/', blank=True, null=True)

  def __str__(self):
    return self.name 
