var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n', 'tags': '', 'url': 'About.html'}, {'title': '小組名單', 'text': '41123135 黃昱閔 \n 41123139 楊力維 \n 41123131 陳冠豪 \n 41123149 蕭宇森 \n 41123134 湯梓峰 \n 41123122 高晟峰 \n 41123101 田芸熏 \n 41123102 張心瑜 \n 41123107 王麒瑋 \n', 'tags': '', 'url': '小組名單.html'}, {'title': '座位排序程式', 'text': '排序程式 \n # Brython code starts\nfrom browser import document, html\n\n# get output html location\nbrython_div = document["brython_div1"]\nbrython_div <= html.P(id="output_table")\n\n# Replace this line with the actual file content\nfile_content = open("https://mde.tw/cadnote/downloads/2a_w12_seat.txt").read()\n\n# Create a dictionary to store student numbers and seat numbers\nseat_map = {}\n\n# Process each line of the file content\nfor line in file_content.splitlines():\n    # Split each line using tabs\n    elements = line.split("\\t")\n\n    # If the line contains seat information\n    if len(elements) == 2 and "(" in elements[1]:\n        # Extract student number and seat information\n        stud_num = elements[0].strip()\n        seat_info = elements[1].strip()\n\n        # Add student number and seat information to the dictionary\n        seat_map[stud_num] = seat_info\n\n# Find the maximum row and column values\nmax_row = max(int(seat_info[1]) for seat_info in seat_map.values())\nmax_col = max(int(seat_info[3]) for seat_info in seat_map.values())\n\n# Initialize a 2D list to represent the seating arrangement\nseating_arrangement = [["空位"] * max_col for _ in range(max_row)]\n\n# Populate the seating arrangement with student information\nfor stud_num, seat_info in seat_map.items():\n    row = int(seat_info[1]) - 1\n    col = int(seat_info[3]) - 1\n    seating_arrangement[row][col] = f"座位號: {seat_info}, 學號: {stud_num}"\n\n# Display the result in the HTML document\nresult_html = "<table>"\nfor row in seating_arrangement:\n    result_html += "<tr>"\n    for cell_content in row:\n        result_html += f"<td>{cell_content}</td>"\n    result_html += "</tr>"\nresult_html += "</table>"\n\n# Update the HTML content with the result\ndocument["output_table"].html = result_html\n# Brython code ends\n \n', 'tags': '', 'url': '座位排序程式.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'replit', 'text': '1.登入replit，在My Repls中進去想維護的網站 \n \n 2.點擊RUN開啟動態網站 \n \n 3.執行完畢後點擊New tab 會開出新的分頁(動態網站) \n \n 4.登入動態網站 \n \n 5.維護完成按save存檔，並按Convent轉成靜態 \n \n 6.回到replit中的git頁面，輸入備註完成後按下確定 \n \n 7.進行Pusn回去github \n \n 8.完成更新網站 \n', 'tags': '', 'url': 'replit.html'}, {'title': '每周工作', 'text': '', 'tags': '', 'url': '每周工作.html'}, {'title': 'W6', 'text': '10/20 \n 41123135:建立網站、更新小組名單 \n 41123122:建立網站、更新小組名單 \n \n', 'tags': '', 'url': 'W6.html'}, {'title': '任務一', 'text': '\n', 'tags': '', 'url': '任務一.html'}, {'title': '各部位零件檔', 'text': '檔案連結 \n \n', 'tags': '', 'url': '各部位零件檔.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};