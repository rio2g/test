from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

# Conectar ao banco de dados
def get_db_connection():
    conn = sqlite3.connect('feedback.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    conn = get_db_connection()
    feedbacks = conn.execute('SELECT * FROM feedback').fetchall()
    conn.close()
    return render_template('index.html', feedbacks=feedbacks)

@app.route('/feedback', methods=['POST'])
def feedback():
    nome = request.form['nome']
    mensagem = request.form['mensagem']
    conn = get_db_connection()
    conn.execute('INSERT INTO feedback (nome, mensagem) VALUES (?, ?)', (nome, mensagem))
    conn.commit()
    conn.close()
    return redirect(url_for('index'))

if name == '__main__':
    app.run(debug=True)
