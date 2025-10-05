#!/usr/bin/env python3
import re

# Читаем файл
with open('autism.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Заменяем все пути - используем регулярное выражение для поиска
old_pattern = r'\./Neuroscientist and Psychologist Agree_ This 15-Minute \'Confidence Reset\' Rewires Every Brain That Won\'t Shut Off \(Most Do It Wrong\) _ Health Guardian_files/'
new_path = './autism_files/'

# Заменяем все вхождения
content = re.sub(old_pattern, new_path, content)

# Записываем обратно
with open('autism.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Paths updated successfully!')
