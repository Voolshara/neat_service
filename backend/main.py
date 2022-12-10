from flask import Flask, request
from flask_cors import CORS
from aiogram import Bot, Dispatcher, executor, types
import os, asyncio


app = Flask(__name__)
bot_token = os.environ.get('neat_bot')
main_user = os.environ.get('neat_tg_user')
bot = Bot(token=bot_token)

CORS(app, resources={
    r"/send_contact": {"origins": "*"},
})

dp = Dispatcher(bot)
@dp.message_handler(commands="start")
async def cmd_test1(message: types.Message):
    print(message.from_user.full_name, message.from_user.id)
    await message.reply(str(message.from_user.full_name) + " " + str(message.from_user.id))


async def send_contact(string):
    await bot.send_message(main_user, string)



@app.route('/send_contact', methods=['POST'])  # роут сборки шаблонов
def form_sel():
    out=f"❗Новая заявка:❗\nИмя: %s\nТелефон: %s\nПочта: %s\nТекст: %s\n" % (request.json["name"], request.json["phone"], request.json["email"], request.json["text"])
    # print(out)
    loop = asyncio.new_event_loop()
    coroutine = send_contact(out)
    loop.run_until_complete(coroutine)
    return {
    "status": "success", 
    }

if __name__ == "__main__":
    # executor.start_polling(dp, skip_updates=True)
    app.run(host="0.0.0.0", port="2700") # запуск сервераp