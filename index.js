$(function () {

    selectedNodeName = null;
    selectedNodeID = null;

    console.log('Init JS tree');
    var data = [{
        "id": "p1",
        "parent": "#",
        "text": "Parent-1"
      }, {
        "id": "p2",
        "parent": "#",
        "text": "Parent-2"
      }, {
        "id": "c1",
        "parent": "p2",
        "text": "Child 1"
      }, {
        "id": "c2",
        "parent": "p2",
        "text": "Child 2"
      }, ];
    
    
      $("#jstree_demo_div").jstree({
        "core": {
          "check_callback": true,
          "data": data
        }
      }).on('create_node.jstree', function(e, data) {
        console.log('saved');
      });

    $('#jstree_demo_div').on("changed.jstree", function (e, data) {
        var i, j, r = [];
        for (i = 0, j = data.selected.length; i < j; i++) {
            r.push(data.instance.get_node(data.selected[i]).text);
        }
        selectedNodeID = data.selected;
        selectedNodeName = r;
        console.log(selectedNodeID);
        $('#selected_node').html(r.join(', '))
    });

    $('#create_node').click(function(){
        console.log('Create a node under ' + selectedNodeName.join(', '));
        console.log(selectedNodeID[0]);
        $('#jstree_demo_div').jstree().create_node(selectedNodeID[0], {
            "id": selectedNodeID[0] + "1",
            "text": "New Node"
          }, "last", function() {
            alert("New node is created");
          });
    });

});

