package od.demo;

// -----( IS Java Code Template v1.2

import com.wm.data.*;
import com.wm.util.Values;
import com.wm.app.b2b.server.Service;
import com.wm.app.b2b.server.ServiceException;
// --- <<IS-START-IMPORTS>> ---
// --- <<IS-END-IMPORTS>> ---

public final class java

{
	// ---( internal utility methods )---

	final static java _instance = new java();

	static java _newInstance() { return new java(); }

	static java _cast(Object o) { return (java)o; }

	// ---( server methods )---




	public static final void concatenateStrings (IData pipeline)
        throws ServiceException
	{
		// --- <<IS-START(concatenateStrings)>> ---
		// @sigtype java 3.5
		// [i] field:0:required stringA
		// [i] field:0:required stringB
		// [o] field:0:required result
		// pipeline
		IDataCursor pipelineCursor = pipeline.getCursor();
			String	stringA = IDataUtil.getString( pipelineCursor, "stringA" );
			String	stringB = IDataUtil.getString( pipelineCursor, "stringB" );
		pipelineCursor.destroy();
		
		// pipeline
		IDataCursor pipelineCursor_1 = pipeline.getCursor();
		IDataUtil.put( pipelineCursor_1, "result", stringA.concat(stringB) );
		pipelineCursor_1.destroy();
		
			
		// --- <<IS-END>> ---

                
	}
}

