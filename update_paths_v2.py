#!/usr/bin/env python3

# Читаем файл
with open('autism.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Заменяем все пути - используем простую замену строки
old_path = './Neuroscientist and Psychologist Agree_ This 15-Minute \'Confidence Reset\' Rewires Every Brain That Won\'t Shut Off (Most Do It Wrong) _ Health Guardian_files/'
new_path = './autism_files/'

# Заменяем все вхождения
content = content.replace(old_path, new_path)

# Записываем обратно
with open('autism.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Paths updated successfully!')
print(f'Replaced: {old_path}')
print(f'With: {new_path}')
