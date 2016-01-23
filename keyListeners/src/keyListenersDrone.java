

/*import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class keyListenersDrone implements KeyListener {
	
	
	
	//public static void keyPressed() {
	/*public void keyPressed(KeyEvent e) {

	    int key = e.getKeyCode();
	    
	    if (key == KeyEvent.VK_LEFT) {
	    	System.out.println("counter clockwise");
	    }

	    if (key == KeyEvent.VK_RIGHT) {
	    	System.out.println("clockwise");
	    }

	    if (key == KeyEvent.VK_UP) {
	    	System.out.println("up");
	    }

	    if (key == KeyEvent.VK_DOWN) {
	    	System.out.println("down");
	    }

	   /* if (StdDraw.isKeyPressed(KeyEvent.VK_LEFT)) {
	         System.out.println("counter clockwise");
	         return;
	    }

	    if (StdDraw.isKeyPressed(KeyEvent.VK_RIGHT)) {
	    	System.out.println("clockwise");
	    	return;
	    }

	    if (StdDraw.isKeyPressed(KeyEvent.VK_UP)) {
	    	System.out.println("forward");
	    	return;
	    }

	    if (StdDraw.isKeyPressed(KeyEvent.VK_DOWN)) {
	    	System.out.println("reverse");
	    	return;
	    }
	    
	}*/
	
	//public static void main (String args[]){
		/*while(true){
		    keyPressed();
		    if (StdDraw.isKeyPressed(KeyEvent.VK_Q)) {
		         System.out.println("quit");
		         return;
		    }
		}*/
		
		/*while(true){
			keyPressed()
		}
	}

	@Override
	public void keyTyped(KeyEvent e) {
		// TODO Auto-generated method stub
		if (e.getKeyCode() == KeyEvent.VK_RIGHT) {
            System.out.println("Right key typed");
        }
        if (e.getKeyCode() == KeyEvent.VK_LEFT) {
            System.out.println("Left key typed");
        }
	}

	@Override
	public void keyReleased(KeyEvent e) {
		// TODO Auto-generated method stub
		if (e.getKeyCode() == KeyEvent.VK_RIGHT) {
            System.out.println("Right key Released");
        }
        if (e.getKeyCode() == KeyEvent.VK_LEFT) {
            System.out.println("Left key Released");
        }
	}
	
}*/
		
		
		//package experiment;

		import java.awt.event.KeyEvent;
		import java.awt.event.KeyListener;
		import javax.swing.JFrame;
		import javax.swing.JLabel;
		import javax.swing.JPanel;

		public class keyListenersDrone extends JFrame implements KeyListener {

		    JLabel label;

		    public keyListenersDrone(String s) {
		        super(s);
		        JPanel p = new JPanel();
		        label = new JLabel("Key Listener!");
		        p.add(label);
		        add(p);
		        addKeyListener(this);
		        setSize(0, 0);
		        setVisible(true);

		    }

		    @Override
		    public void keyTyped(KeyEvent e) {

		        if (e.getKeyCode() == KeyEvent.VK_RIGHT) {
		            System.out.println("Right key typed");
		        }
		        if (e.getKeyCode() == KeyEvent.VK_LEFT) {
		            System.out.println("Left key typed");
		        }

		    }

		    @Override
		    public void keyPressed(KeyEvent e) {

		        if (e.getKeyCode() == KeyEvent.VK_RIGHT) {
		            System.out.println("Right key pressed");
		        }
		        if (e.getKeyCode() == KeyEvent.VK_LEFT) {
		            System.out.println("Left key pressed");
		        }

		    }

		    @Override
		    public void keyReleased(KeyEvent e) {
		        if (e.getKeyCode() == KeyEvent.VK_RIGHT) {
		            System.out.println("Right key Released");
		        }
		        if (e.getKeyCode() == KeyEvent.VK_LEFT) {
		            System.out.println("Left key Released");
		        }
		    }

		    public static void main(String[] args) {
		        new keyListenersDrone("Key Listener Tester");
		    }
		}
