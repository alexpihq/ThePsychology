#!/usr/bin/env python3
import os
import re

# Список файлов для очистки
css_files = [
    'autism_files/Dz_pLg.css',
    'autism_files/Dkohi4.css', 
    'autism_files/C1jHZi.css',
    'autism_files/n03ClK.css'
]

# Паттерн для поиска и удаления
pattern_to_remove = r'/\* COLORS \*/\s*/\* SIZES \*/\s*/\* FONTS \*/\s*/\* MISCELLANEOUS \*/\s*/\* Z-INDEXES - copied from source bootstrap file and adjusted \*/\s*/\* WHITELABEL \*/\s*\.cookiefirst-disabled-resource\s*\{\s*display:\s*none;\s*\}\s*\[data-cookiefirst-category\]\[data-src\]\s*\+\s*\.cookiefirst-disabled-resource\s*\{\s*display:\s*block;\s*\}'

for css_file in css_files:
    if os.path.exists(css_file):
        print(f"Processing {css_file}...")
        
        # Читаем файл
        with open(css_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Удаляем паттерн
        content = re.sub(pattern_to_remove, '', content, flags=re.MULTILINE | re.DOTALL)
        
        # Также удаляем отдельные комментарии, если они остались
        content = re.sub(r'/\* COLORS \*/', '', content)
        content = re.sub(r'/\* SIZES \*/', '', content)
        content = re.sub(r'/\* FONTS \*/', '', content)
        content = re.sub(r'/\* MISCELLANEOUS \*/', '', content)
        content = re.sub(r'/\* Z-INDEXES - copied from source bootstrap file and adjusted \*/', '', content)
        content = re.sub(r'/\* WHITELABEL \*/', '', content)
        
        # Удаляем стили cookiefirst
        content = re.sub(r'\.cookiefirst-disabled-resource\s*\{\s*display:\s*none;\s*\}', '', content)
        content = re.sub(r'\[data-cookiefirst-category\]\[data-src\]\s*\+\s*\.cookiefirst-disabled-resource\s*\{\s*display:\s*block;\s*\}', '', content)
        
        # Убираем лишние пустые строки
        content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
        
        # Записываем обратно
        with open(css_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Cleaned {css_file}")
    else:
        print(f"File {css_file} not found")

print("CSS cleaning completed!")
