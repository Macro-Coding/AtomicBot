import java.awt.Color;
import java.awt.Font;
import java.awt.Frame;
import java.awt.Label;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import javax.swing.JDialog;

public class Main extends JDialog 
{
	private static final long serialVersionUID = 1L;

	public Main() 
	{
		//Create a frame
		Frame f = new Frame();
		f.setSize(500, 300);
		
		//Prepare font
		Font font = new Font( "SansSerif", Font.PLAIN, 22 );
		
		//Write something
        String[] fonts = {"Verdana", "Comic Sans MS", "At", "This", "Point", "i", "ran", "out", "of", "fonts"};
		Label label = new Label("Changing fonts!");
		label.setForeground(Color.BLACK);
		label.setFont(font);
		f.add(label);
		//Make visible
		f.setVisible(true);
		f.addWindowListener(new WindowAdapter() {
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
        while(true){
            for(int i = 0; i < fonts.length; i++){
                try{
                    Thread.sleep(2000);
                }catch (InterruptedException e){
                    System.out.println(e);
                }
                label.setText(fonts[i]);
            }
        }
	}

	public static void main(final String[] args) 
	{
		new Main();
	}

}
