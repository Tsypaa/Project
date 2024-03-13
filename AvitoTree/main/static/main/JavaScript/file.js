function getPrice() {
            var location = document.getElementById("local").value;
            var category = document.getElementById("categ").value;

            // Получить CSRF-токен
            var csrftoken = getCookie('csrftoken');

            // Отправить запрос на сервер
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "{% url 'get_price' %}", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("X-CSRFToken", csrftoken); // Установить CSRF-токен в заголовок
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    document.querySelector(".price").innerHTML = "Цена: " + response.price;
                }
            };
            xhr.send("location=" + location + "&category=" + category);
        }

        // Функция для получения CSRF-токена из cookie
        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i].trim();
                    // Проверяем начинается ли куки с нужного имени
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }