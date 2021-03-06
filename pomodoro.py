from __future__ import print_function
from clize import run
from sigtools import modifiers
import sys
import time
import subprocess
from datetime import datetime
import os

try:
    from PyQt5.QtWidgets import QMessageBox
    from PyQt5.Qt import QApplication
except ImportError:
    has_qt = False
else:
    has_qt = True


display = print
script_dir = os.path.dirname(__file__)
ALARM_FILE_DIRS = [
    '.',
    script_dir,
    sys.prefix,
    os.path.join(script_dir, "..", "..", "clock.mp3"),
]
ALARM_FILENAME = 'clock.mp3'
for alarm_file_dir in ALARM_FILE_DIRS:
    ALARM_FILE = os.path.join(alarm_file_dir, ALARM_FILENAME)
    if os.path.exists(ALARM_FILE):
        break
ALARM_CMD_FFPLAY = ["ffplay", "-nodisp", "-autoexit"]
ALARM_CMD_MPG123 = ["mpg123"]
ALARM_CMDS = (ALARM_CMD_MPG123, ALARM_CMD_FFPLAY)
DATA_FILENAME = os.path.expanduser("~/.pomodoro")
DEV_NULL = open(os.devnull, "w")


def notify(title, content, more=''):
    if not has_qt:
        return
    app = QApplication(sys.argv)
    msg = QMessageBox()
    msg.setIcon(QMessageBox.Information)
    msg.setText(content)
    msg.setWindowTitle(title)
    msg.setDetailedText(more)
    msg.show()
    app.exec_()


def tick(duration):
    try:
        time.sleep(duration)
    except KeyboardInterrupt:
        display("Interrupting")
        interrupt = True
    else:
        interrupt = False
    return interrupt


def play_alarm(filename):
    for alarm_cmd in ALARM_CMDS:
        cmd = alarm_cmd + [filename]
        try:
            p = subprocess.Popen(cmd, stdout=DEV_NULL, stderr=subprocess.PIPE)
            p.wait()
        except OSError:
            # error, try the next alarm cmd
            continue
        else:
            # successful
            return


def write_pomo(start, stop, tag):
    duration = (stop - start).total_seconds() / 60.
    line = "{0},{1},{2},{3}\n".format(tag, start, stop, duration)
    if not os.path.exists(DATA_FILENAME):
        fd = open(DATA_FILENAME, "w")
        fd.write("work,start,end,duration\n")
    else:
        fd = open(DATA_FILENAME, "a")
    fd.write(line)
    fd.close()


@modifiers.kwoargs('repeat', 'alarm', 'notif')
def main(work=60, rest=5, repeat=10, alarm=True, notif=False):
    """
    work : int
        nb of minuntes of work
    rest : int
        nb of minutes of rest
    repeat : int
        nb of cycles work-rest to do
    alarm : bool
        whether to play an alarm each time a pomodoro is finished or started
    notif : bool
        whether to send a message box each time a pomodoro is finished or
        started
    """
    for _ in range(repeat):
        display("Work now")
        start = datetime.now()
        interrupted = tick(int(work) * 60)
        if interrupted:
            break
        stop = datetime.now()
        write_pomo(start, stop, "work")
        if alarm:
            play_alarm(ALARM_FILE)
        if notif:
            notify('pomodoro', 'Finished pomo, rest now.')
        display("Rest now")
        start = datetime.now()
        interrupted = tick(int(rest) * 60)
        if interrupted:
            break
        stop = datetime.now()
        write_pomo(start, stop, "rest")

        if alarm:
            play_alarm(ALARM_FILE)
        if notif:
            notify('pomodoro', 'Finished rest, work now.')
        display("Cycle complete")


if __name__ == "__main__":
    run(main)