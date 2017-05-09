Visible = 0

Set objExplorer = WScript.CreateObject _
("InternetExplorer.Application", "IE_")
objExplorer.Navigate "http://mysite.com/landpage.html"

'Determines if the window is visible or not
objExplorer.Visible = 0

'Suspend the script for 1 minute
WScript.Sleep 60000

'Close the IE (instantiated) window
objExplorer.quit

Sub IE_onQuit()
Wscript.Quit
End Sub
