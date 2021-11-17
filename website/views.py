from flask import Blueprint, render_template, request, flash, jsonify
from flask_login import login_required, current_user
from .models import Note
from . import db
import json

views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
@login_required
def home():
    if request.method == 'POST':
        note = request.form.get('note')

        if len(note) < 1:
            flash('Note is too short!', category='error')
        else:
            new_note = Note(data=note, user_id=current_user.id)
            db.session.add(new_note)
            db.session.commit()
            flash('Note added!', category='success')

    return render_template("home.html", user=current_user)

@views.route('/delete-note', methods=['POST'])
def delete_note():
    note = json.loads(request.data)
    noteId = note['noteId']
    note = Note.query.get(noteId)
    if note:
        if note.user_id == current_user.id:
            db.session.delete(note)
            db.session.commit()

    return jsonify({})

@views.route('/Live', methods=['POST'])
def Live():
    return render_template("Live.html", user=current_user)

@views.route('/organizational_chart', methods=['POST'])
def organizational_chart():
    return render_template("organizational_chart.html", user=current_user)

@views.route('/Fight_card', methods=['POST'])
def Fight_card():
    return render_template("Fight_card.html", user=current_user)

@views.route('/Tournament_bracket', methods=['POST'])
def Tournament_bracket():
    return render_template("Tournament_bracket.html", user=current_user)