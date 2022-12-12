Infinity > 100500; // true
-Infinity < -100500; // true
100500 / 0; // Infinity :)

// а вот дальше интереснее

Infinity === Infinity; // true

Infinity > Infinity; // false
Infinity < Infinity; // false

Infinity >= Infinity; // true
Infinity <= Infinity; // true

Infinity + Infinity; // Infinity
-Infinity - Infinity; // -Infinity

Infinity - Infinity; // NaN O_o
-Infinity + Infinity; // NaN O_o
Infinity / Infinity; // NaN

Infinity / 10; // Infinity
Infinity * 10; // Infinity
Infinity ** 10; // Infinity
Infinity ** Infinity; // Infinity

Infinity ** -Infinity; // 0
(-Infinity) ** Infinity; // Infinity

/*
- Не используйте Infinity без явной необходимости!
- Всё, что делает бесконечность ещё более бесконченой,
  возвращает бесконечность
- Любые операции с бесконечностью и числом вернут бесконечность
- Уменьшение бесконечность при делении или вычитании
  (прибавлении для отрицательной) бесконечности в JavaScript не работает
- Две бесконечности равны
- Деление на 0 даёт бесконечность
*/