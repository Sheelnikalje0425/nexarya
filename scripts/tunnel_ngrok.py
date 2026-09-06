import time
from pyngrok import ngrok, conf

def run_ngrok():
    authtoken = "38qZtO8uSLdu83VbY9pWcJpVubl_4Jsb2L1q1jv4LW7XmdKWB"
    ngrok.set_auth_token(authtoken)
    
    try:
        tunnel = ngrok.connect(3000, "http")
        print("==========================================")
        print(f"[NGROK TUNNEL ACTIVE] Live at: {tunnel.public_url}")
        print("==========================================")
        
        while True:
            time.sleep(1)
    except Exception as e:
        print(f"Error starting ngrok tunnel: {e}")

if __name__ == "__main__":
    run_ngrok()
