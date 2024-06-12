#!/bin/bash

# 定义要搜索的目录
SEARCH_DIR="./"
# 定义要搜索的短语
SEARCH_PHRASE="候选人"

# 使用find和grep搜索包含短语的文件
echo "Searching word '${SEARCH_PHRASE}' in file..."
find "$SEARCH_DIR" -type f -exec grep -l "$SEARCH_PHRASE" {} +

echo "Done."

