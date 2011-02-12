private var startPoint : Vector3;
private var startTime : float;

var endPoint : Vector3;
var duration : float = 500.0;

function Start() {
    startPoint = transform.position;
    startTime = Time.time;
	endPoint = Vector3(170, startPoint.y,startPoint.z);
}

function onMouseDown() {
}

function Update () {
    transform.position = Vector3.Lerp(startPoint, endPoint, (Time.time - startTime) / duration);
	
	if(transform.position == endPoint)
	    Application.LoadLevel(Application.loadedLevel - 1);
}