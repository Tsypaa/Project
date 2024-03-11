from django.db import models

# Create your models here.
class information(models.Model):
    location = models.CharField('Локация', max_length=50)
    categories = models.CharField('Категория', max_length=50)
    price = models.CharField('Цена', max_length=20)

    def __str__(self):
        return self.location

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'
