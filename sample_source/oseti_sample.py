import oseti

"""
Sentiment Analysisライブラリ osetiのサンプルコード
"""

analyzer = oseti.Analyzer()  # インスタンス生成

# Analyzeでネガティブ度合・ポジティブ度合を数値で得ることができる。
print(analyzer.analyze('「すごい！」久保建英が右足で今季２点目となる鮮やかな同点弾！'))  # [1.0]
print(analyzer.analyze('桜「政治枠」招待者、功績チェックせず　政府関係者証言'))  # [-1.0]

# 文章が2つ以上存在する場合は、結果も複数得ることができる。
print(analyzer.analyze('今日は雪です。とても寒いです。でも雪は大好きです。'))  # [0, 0, 1.0]
