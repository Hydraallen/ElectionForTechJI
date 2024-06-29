#!/bin/bash

# 定义要搜索的目录
SEARCH_DIR="./"
# 定义要搜索的短语
SEARCH_PHRASE="fontSize"
# 定义要搜索的文件类型，例如 "*.txt" 或 "*.cpp"
FILE_TYPE="*.jsx"

# 使用find和grep搜索包含短语的文件
echo "Searching word '${SEARCH_PHRASE}' in file type '${FILE_TYPE}'..."
find "$SEARCH_DIR" -type f -name "$FILE_TYPE" -exec grep -l "$SEARCH_PHRASE" {} +

echo "Done."

