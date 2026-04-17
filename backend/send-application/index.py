import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """Отправляет заявку игрока в Discord через вебхук"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    nickname = body.get('nickname', '').strip()

    if not nickname:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Ник не указан'})
        }

    webhook_url = os.environ['DISCORD_WEBHOOK_URL']

    message = {
        'embeds': [{
            'title': '📋 Новая заявка на сервер',
            'color': 0x5AAB1E,
            'fields': [
                {'name': '⛏ Ник в игре', 'value': nickname, 'inline': False}
            ],
            'footer': {'text': 'SMP Server • Заявка с сайта'}
        }]
    }

    data = json.dumps(message).encode('utf-8')
    req = urllib.request.Request(
        webhook_url,
        data=data,
        headers={'Content-Type': 'application/json'},
        method='POST'
    )
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
